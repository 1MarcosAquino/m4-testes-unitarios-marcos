import mock from '../../mocks/user';
import createUser from '../../../services/createUser.service';

describe('Criação de usúario', () => {
    it('Deve ser possivel criar um usúario', () => {
        const newUser = createUser(mock.createUser);
        expect(newUser).toEqual(mock.createUser);
    });
});
