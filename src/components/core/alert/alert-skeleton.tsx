import Skeleton from 'react-loading-skeleton';

import * as Alert from './alert';

const AlertSkeleton = () => {
  return (
    <Alert.Root>
      <div>
        <Alert.Title>
          <Skeleton width={150} />
        </Alert.Title>
        <Alert.Description>
          <Skeleton width={300} />
        </Alert.Description>
      </div>
    </Alert.Root>
  );
};

export { AlertSkeleton };
