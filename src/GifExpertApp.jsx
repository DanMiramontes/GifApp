import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

       // setCategories( cat => [...cat, categoryAdd]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={ setCategories }/>
                onNewCategory={ event  => onAddCategory(event)} />
              {
                  categories.map( (category) => (
                      <GifGrid key={ category } category={ category }/>
                  ))
               //     return <li key={category}>{ category }</li>;)
              }
        </>
    )
}