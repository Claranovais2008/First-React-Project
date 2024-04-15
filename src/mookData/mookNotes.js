import { generateAtualDate } from "../Helpers/generateAtualDate";

export const mockNotes = [
    {
        id: 1,
        title: 'Nota 1 teste',
        descrption: 'Teste 1',
        data: generateAtualDate()
    },
    {
        id: 2,
        title: 'Nota 2 teste',
        descrption: 'Teste 2',
        data: generateAtualDate()
    },
    {
        id: 3,
        title: 'Nota 3 teste',
        descrption: 'Teste 3',
        data: generateAtualDate()
    }
];