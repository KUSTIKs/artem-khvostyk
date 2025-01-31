'use client';

import { RiBrushLine } from '@remixicon/react';

import { Button } from '#src/components/core/button/button';
import { CreateDrawingDialog } from '#src/components/dialogs/create-drawing-dialog/create-drawing-dialog';
import { useUser } from '#src/hooks/auth';
import { pluralize } from '#src/utils/herlpers';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getRemainingDays } from '#src/services/drawings';
import { createClient } from '#src/utils/supabase/client';
import classes from './draw-section.module.scss';

const DrawSection = () => {
  const { remainingDays: initialDays, user } = useUser();
  const supabase = useMemo(createClient, []);
  const { data: days, isFetching } = useQuery({
    initialData: initialDays,
    queryKey: ['remaining-days'],
    queryFn: () => user && getRemainingDays(supabase, user.id),
  });

  if (days === null) return null;

  return (
    <div className={classes.section}>
      <p className={classes.caption}>Add your drawing</p>
      <p className={classes.message}>
        You can only create one drawing every 14 days.
      </p>
      <CreateDrawingDialog>
        <Button variant="outlined" disabled={days > 0 || isFetching}>
          <RiBrushLine />
          Draw {days > 0 && `in ${days} ${pluralize('day', days)}`}
        </Button>
      </CreateDrawingDialog>
    </div>
  );
};

export { DrawSection };
