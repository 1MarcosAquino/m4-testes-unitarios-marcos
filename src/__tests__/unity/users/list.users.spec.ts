import mock from '../../mocks/user';
import listUsers from '../../../services/listAllUsers.service';
import createUser from '../../../services/createUser.service';

describe('Listar usúarios', () => {
    it('Listagem de Usúarios', () => {
        const newUser = createUser(mock.createUser);
        const list = listUsers();
        expect(list).toEqual(expect.arrayContaining([newUser]));
    });
});
