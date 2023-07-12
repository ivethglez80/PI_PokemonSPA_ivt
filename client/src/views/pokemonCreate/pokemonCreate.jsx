import React, { useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";
import {getAlltypes, postPokemon, cleanPokemons} from "../../reducer/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./pokemonCreate.module.css"


export default function PokemonCreate(){
    const dispatch = useDispatch();
    const types = useSelector((state)=>state.types);
    const history = useHistory();
    const [errors, setErrors] = useState({});
    
    const [input, setInput] = useState({
        name:"",
        hp:"",
        attack:"",
        defense: "",
        speed:"",
        height:"",
        weight:"",
        types:[],
        img:""
    });

    let mpty = /\S+/;
    let vName = /^[a-z]+$/i;
    let vNum = /^\d+$/;
    let vUrl = /^(ftp|http|https):\/\/[^ "]+$/;

    const validate = (input) =>{
        let errors = {};
        if (!mpty.test(input.name)|| !vName.test(input.name)|| input.name.length<3){
            errors.name = "Name required of more than 3 characteres and no numbers";
        }
        if (!vNum.test(input.hp) || parseInt(input.hp)<1){
            errors.hp = "hp required, only numbers higher than one";
        }
        if (!vNum.test(input.attack) || parseInt(input.attack)<1){
            errors.attack = "attack required, only numbers higher than one"
        }
        if (!vNum.test(input.defense) || parseInt(input.defense)<1){
            errors.defense = "defense required, onl;y numers higher than one"
        }
        if (!vNum.test(input.speed) || parseInt(input.speed)<1){
            errors.speed = "speed required, onl;y numers higher than one"
        }
        if (!vNum.test(input.height) || parseInt(input.height)<1){
            errors.height = "height required, onl;y numers higher than one"
        }
        if (!vNum.test(input.weight) || parseInt(input.weight)<1){
            errors.weight = "weight required, onl;y numers higher than one"
        }
        if (!vUrl.test(input.img)){
            errors.img ="Image URL is not valid or empty."
        }
    return errors;
    };

    const handleChange = e =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    const handleSelect = e =>{
        if (input.types.length<2){
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            });
        }else{
            alert("You can select up to two type options.");
            // setErrorText("You can select up to two type options.");
            // setTimeout(() => {
            //   setErrorText(null);
            // }, 3000); 
        }
    };

    const handleSubmit = e =>{
        e.preventDefault();

        if (!errors.name &&
            !errors.hp &&
            !errors.attack &&
            !errors.defense &&
            !errors.speed &&
            !errors.height &&
            !errors.weight &&
            !errors.img){
            
            dispatch(postPokemon(dispatch));
            setInput({
                name:"",
                hp:"",
                attack:"",
                defense:"",
                speed:"",
                height:"",
                weight:"",
                types:[],
                img:""
            });
            dispatch(cleanPokemons(dispatch));
            history.push("/home");
            }else{
                alert("error, check the form")
                // console.log('Error in form submission');
            }
    };

    const handleDelete = (e) =>{
        setInput({
            ...input,
            types: input.types.filter(type=>types!==e)
        })
    };

    useEffect(()=>{
        dispatch(getAlltypes());
    }, [dispatch]);

    return (
        <div>
            <Link to="/home">
                <button>Go back Home</button>
            </Link>

            <form onSubmit={e=>{handleSubmit(e);}}>
                <h3>The Pokemon creator form</h3>

                <label>Name:</label>
                <input type="text" value={input.name} name="name" onChange={e=>{handleChange(e);}} placeholder="Name" />
                <p>{errors.name}</p>

                <label>HP:</label>
                <input type="number" value={input.hp} name="hp" onChange={e=>{handleChange(e);}} placeholder="HP" />
                <p>{errors.name}</p>

                <label>ATTACK:</label>
                <input type="number" value={input.attack} name="attack" onChange={e=>{handleChange(e);}} placeholder="ATTACK" />
                <p>{errors.name}</p>

                <label>DEFENSE:</label>
                <input type="number" value={input.defense} name="defense" onChange={e=>{handleChange(e);}} placeholder="DEFENSE" />
                <p>{errors.name}</p>

                <label>SPEED:</label>
                <input type="number" value={input.speed} name="speed" onChange={e=>{handleChange(e);}} placeholder="SPEED" />
                <p>{errors.name}</p>

                <label>HEIGHT:</label>
                <input type="number" value={input.height} name="height" onChange={e=>{handleChange(e);}} placeholder="HEIGHT" />
                <p>{errors.name}</p>

                <label>WEIGTH:</label>
                <input type="number" value={input.weight} name="weight" onChange={e=>{handleChange(e);}} placeholder="WEIGHT" />
                <p>{errors.name}</p>

                <label>IMAGE:</label>
                <input type="text" value={input.img} name="img" onChange={e=>{handleChange(e);}} placeholder="URL IMAGE" />
                <p>{errors.name}</p>

                <select onChange={e=>{handleSelect(e);}}>
                    <option> Select type </option>
                    {types?.map(e=>{
                        return(
                            <option key={e.id} value={e.name}>{e.name}</option>
                        );
                    })}
                </select>
                {input.types.map(e=>{
                    return(
                        <div key={e}>
                            <p>{e}</p>
                            <button onClick={()=>{handleDelete(e);}}>x</button>
                        </div>
                    );
                })
                }
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

