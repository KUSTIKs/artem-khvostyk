import type { SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

import { createClient } from '#src/utils/supabase/client';

const uploadDrawing = async ({
  drawing,
  name,
}: {
  drawing: Blob;
  name: string;
}) => {
  try {
    const supabase = createClient();
    const fileName = uuidv4();

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('drawings')
      .upload(fileName, drawing);

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
      .from('drawings')
      .getPublicUrl(fileName);

    const { data: insertData, error: insertError } = await supabase
      .from('drawings')
      .insert({
        name: name,
        image_url: publicUrlData.publicUrl,
        storage_path: uploadData.path,
      })
      .select()
      .single();

    if (insertError) throw insertError;

    return {
      imageUrl: publicUrlData.publicUrl,
      dbRecord: insertData,
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const getDrawings = async (params?: {
  range?: { from: number; to: number };
}) => {
  try {
    const supabase = createClient();

    let query = supabase
      .from('drawings')
      .select('*, author:author_id (*)')
      .order('created_at', { ascending: false });

    if (params?.range) {
      query = query.range(params.range.from, params.range.to);
    }

    const { data: selectData, error: selectError } = await query;

    if (selectError) throw selectError;

    return { drawings: selectData };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const getRemainingDays = async (
  supabase: SupabaseClient,
  userId: string,
): Promise<number> => {
  const { data: remainingDays } = await supabase.rpc(
    'calculate_days_until_new_drawing',
    { user_id: userId },
  );

  return remainingDays;
};

export { uploadDrawing, getDrawings, getRemainingDays };
