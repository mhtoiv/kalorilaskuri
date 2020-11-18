import React, {useState} from 'react';



const Ingredient = ({ingredient, selected, setSelected, updateValues}) => {

    const updateWeight = (e) => {
        ingredient.weight = e.target.value;
        updateValues();
    }

    const removeIngredient = () => {
        ingredient.weight = 0;
        setSelected(selected.filter(ingr => ingr !== ingredient));
        updateValues();
    }


    return(
        <div>
            <div className="flex name">
                <h3>{ingredient.name}</h3>
                <button onClick={() => removeIngredient()}>X</button>
            </div>

            <div className="flex amount">
                <input autoComplete="off" type="number" min="0" max="50000" placeholder="esim. 100" id="input" onChange={(e) => updateWeight(e)}/>
                <p>g</p>
            </div>

        </div>
    )
}

const Display = ({selected, setSelected}) => {

    const [total, setTotal] = useState({grams: 0,
        energy: 0, fats: 0, sfats: 0, carbs: 0, sugars: 0, protein: 0, salt: 0});

    const updateValues = () => {
        let grams = 0;
        let energy = 0;
        let fats = 0;
        let sfats = 0;
        let carbs = 0;
        let sugars = 0;
        let protein = 0;
        let salt = 0;

        selected.forEach(function(current){
            grams += parseFloat(current.weight);
            energy += (current.energy/100*current.weight);
            fats += (current.fats/100*current.weight)
            sfats += (current.sfats/100*current.weight);
            carbs += (current.carbs/100*current.weight);
            sugars += (current.sugars/100*current.weight);
            protein += (current.sugars/100*current.weight);
            salt += (current.salt/100*current.weight);
        });
        setTotal({grams: grams, energy: parseFloat(energy.toFixed(1)),
            fats: parseFloat(fats.toFixed(1)), sfats: parseFloat(sfats.toFixed(1)),
            carbs: parseFloat(carbs.toFixed(1)), sugars: parseFloat(sugars.toFixed(1)),
            protein: parseFloat(protein.toFixed(1)), salt: parseFloat(salt.toFixed(2))})
    }

    return(
        <div>
            <div>
                {selected
                    .map(ingredient =>
                        <Ingredient ingredient={ingredient}
                                    selected={selected}
                                    setSelected={setSelected}
                                    updateValues={updateValues}


                        />)}
            </div>
            <div className="total">
                <p>Yhteensä: {total.grams} g</p>
                <p>Energiaa: {total.energy} kcal</p>
                <p>Rasvaa: {total.fats} g</p>
                <p>- josta tyydyttynyttä: {total.sfats} g</p>
                <p>Hiilihydraatteja: {total.carbs} g</p>
                <p>- josta sokereita: {total.sugars} g</p>
                <p>Proteiiniä: {total.protein} g</p>
                <p>Suolaa: {total.salt} g</p>
            </div>

        </div>
    )
}

export default Display;