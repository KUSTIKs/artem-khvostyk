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

export { uploadDrawing };
