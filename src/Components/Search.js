import React, {useState} from 'react';
import ingredientsJSON from "../ingredientsJSON";

const Search = ({selected, setSelected}) =>{

    const ingredients = ingredientsJSON;
    const [search, setSearch] = useState("");

    return (
        <div>
            <div>
                <h2>
                    Hae ainesosia
                </h2>
            </div>

            <div>
                <input type="text" placeholder="Kirjoita hakeaksesi aineosaa..." onChange={(e) =>
                    setSearch(e.target.value)}/>
            </div>

            <div>
                {search === "" ?
                    <p/>
                    :
                    ingredients
                        .filter(ingredient => ingredient.name.includes(search))
                        .map(ingredient =>
                            <button onClick={() => setSelected(selected.concat(ingredient))}>{ingredient.name}</button>
                        )}
            </div>

        </div>
    )
}

export default Search;