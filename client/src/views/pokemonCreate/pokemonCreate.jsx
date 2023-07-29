import React, { useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";
import {getAlltypes, postPokemon, cleanPokemons} from "../../reducer/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./pokemonCreate.module.css"
import backToHomeButtonImg from "../../img/BacktoHomeButtonImg.png";
import pokeCreatorImg from "../../img/pokeCreatorImg.png";
import crtBtn from "../../img/crtBtn.png";



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

    const handleSelect = e => {
        const selectedType = types.find(type => type.name === e.target.value);
        if (selectedType) {
          if (input.types.length < 2) {
            setInput(input=>({
              ...input,
              types: [...input.types, selectedType]
            }));
            e.target.value = "Select Type";
          } else {
            alert("You can select up to two type options.");
          }
        } else {
          alert("Invalid type selected.");
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
            
            const typeNames = input.types.map(type=>type.name);
            const newPokemon = {
            ...input,
            types: typeNames
            };

            console.log(newPokemon);
            dispatch(postPokemon(newPokemon));
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
            
            alert("Your Pokemon was succesfully created")
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
            types: input.types.filter(type=>type!==e)
        })
    };

    useEffect(()=>{
        dispatch(getAlltypes());
    }, [dispatch]);

    return (
        <div className={styles.allform}>
            <div  className={styles.divbtn}>
            <Link to="/home">
                <button className={styles.btn}>
                    <img src={backToHomeButtonImg} alt="Back to Home" />
                </button>
            </Link>
            </div>

        <div className={styles.formBox}>
            <form onSubmit={e=>{handleSubmit(e);}}>
                <div>
                <img src={pokeCreatorImg} alt="pokemon Creator Form" />
                </div>

                <label className={styles.labelForm}>NAME:</label>
                <input type="text" value={input.name} name="name" onChange={e=>{handleChange(e);}} placeholder="Name" />
                <p>{errors.name}</p>

                <label className={styles.labelForm}>HP:</label>
                <input type="number" value={input.hp} name="hp" onChange={e=>{handleChange(e);}} placeholder="HP" />
                <p>{errors.hp}</p>

                <label className={styles.labelForm}>ATTACK:</label>
                <input type="number" value={input.attack} name="attack" onChange={e=>{handleChange(e);}} placeholder="ATTACK" />
                <p>{errors.attack}</p>

                <label className={styles.labelForm}>DEFENSE:</label>
                <input type="number" value={input.defense} name="defense" onChange={e=>{handleChange(e);}} placeholder="DEFENSE" />
                <p>{errors.defense}</p>

                <label className={styles.labelForm}>SPEED:</label>
                <input type="number" value={input.speed} name="speed" onChange={e=>{handleChange(e);}} placeholder="SPEED" />
                <p>{errors.speed}</p>

                <label className={styles.labelForm}>HEIGHT:</label>
                <input type="number" value={input.height} name="height" onChange={e=>{handleChange(e);}} placeholder="HEIGHT" />
                <p>{errors.height}</p>

                <label className={styles.labelForm}>WEIGTH:</label>
                <input type="number" value={input.weight} name="weight" onChange={e=>{handleChange(e);}} placeholder="WEIGHT" />
                <p>{errors.weight}</p>

                <label className={styles.labelForm}>IMAGE:</label>
                <input type="text" value={input.img} name="img" onChange={e=>{handleChange(e);}} placeholder="URL IMAGE" />
                <p>{errors.img}</p>

                <div className={styles.selectDiv}>
                <select onChange={e=>{handleSelect(e);}}>
                    <option> Select type </option>
                    
                    {types?.map(e=>{
                        return(
                            <option key={e.id} value={e.name}>{e.name}</option>
                        );
                    })}
                </select>

                <div className={styles.choicesContainer}>
                {input.types.map((type, index) => (
                <div className={styles.choices} key={index}>
                    <p>{type.name}</p>
                    <button onClick={() => handleDelete(type)}>x</button>
                </div>
                ))}
                </div>
                </div>

                <div className={styles.divBtn}>
                <button type="submit" className={styles.styleBtn}>
                    <img className={styles.imgBtn} src={crtBtn} alt="create button" />
                </button>
                </div>

            </form>
            </div>
        </div>
    );
};

