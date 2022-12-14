import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem/>', () => { 

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg'

    test('debde de hacer match son el snapshot ', () => { 
        const { container } = render(<GifItem title={ title } url={ url }/>)
        expect( container ).toMatchSnapshot();
     })

     test('Debe mostrar la imgen con un URL y el ALT indicado', () => { 

        render( <GifItem title={ title } url={ url }/>);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
        const { src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
      })

      test('Debe mostrar el titulo en el componente', () => { 
        render( <GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy();
       })
 })