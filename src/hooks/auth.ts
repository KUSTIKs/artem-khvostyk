import { useContext } from 'react';

import { AuthContext, UserContext } from '#src/utils/auth-context';

const useAuth = () => useContext(AuthContext);
const useUser = () => useContext(UserContext);

export { useAuth, useUser };
