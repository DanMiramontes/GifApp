import {getGifs} from "../../src/helpers/getGifs.js";

describe('Pruebas em getGifs()',() =>{

    test('debe de retormar un arreglo de gifs', async() =>{

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String),
        })
    });
});