import { logIn } from './logIn';
import { signUp } from './signUp';
import { validateAccessToken } from './validateAccessToken';
import { updateUser } from './updateUser';
import { updateUserPassword } from './updateUserPassword';
import { deleteUser } from './deleteUser';
import { recoveryPassword } from './recoveryPassword';
import { confirmRecoveryPassword } from './confirmRecoveryPassword';

export default {
    logIn,
    signUp,
    validateAccessToken,
    updateUser,
    updateUserPassword,
    deleteUser,
    recoveryPassword,
    confirmRecoveryPassword
}