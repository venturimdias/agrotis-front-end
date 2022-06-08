import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { MenuItem, TextField } from '@material-ui/core'

import { ActionAlerts } from '../'

import * as S from './style'

const propriedade = [
  {
    id: '10001',
    nome: "Agrotis 1",
    cnpj:  "04.909.987/0001-89"
  },
  {
    id: '10002',
    nome: "Agrotis 2",
    cnpj:  "04.909.987/0001-88"
  },
  {
    id: '10003',
    nome: "Agrotis 3",
    cnpj:  "04.909.987/0001-87"
  },
  {
    id: '10004',
    nome: "Agrotis 4",
    cnpj:  "04.909.987/0001-86"
  },
  {
    id: '10005',
    nome: "Agrotis 5",
    cnpj:  "04.909.987/0001-85"
  }
]
const laboratorio = [
  {
    id: '20001',
    nome: "Agro Skynet"
  },
  {
    id: '20002',
    nome: "Umbrella Agro"
  },
  {
    id: '20003',
    nome: "Osborn Agro"
  },
  {
    id: '20004',
    nome: "Skyrim Agro"
  },
  {
    id: '20005',
    nome: "Agro Brasil"
  },
  {
    id: '20006',
    nome: "AgroSky Brasil"
  },
]

export default function Formulario(){
  const [formBlock, setFormBlok] = useState(false)

  const [obsletter, setObsletter] = useState(0)
  const [nomeletter, setNomeletter] = useState(0)

  const [cnpjProp, setCnpjProp] = useState("")
  const [alertMsg, setAlertMsg] = useState({tipo: "", msg: ""})

  //#region : REACT HOOK FORM + MATERIAL UI (não funcionou conforme esperado) 
  const [valuesProp, setValuesProp] = useState({ currenty: "" }) //propriedade[0] 
  const [valuesLab, setValuesLab] = useState({ currenty: "" }) //laboratorio[0] 

  const handleChangeProp = (event) => {
    // console.log(event.target.value)
    setValuesProp(event.target.value);
  };
  const handleChangeLab = (event) => {
    // console.log(event.target.value)
    setValuesLab(event.target.value);
  };
  //#endregion

  //#region : EXIBI OS DADOS NO CONSOLE
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    const { nome, dataInicio, dataFinal, selectPropriedade, selectLaboratorio, observacao } = data

    setAlertMsg({ msg: "Cadastro realizado com sucesso!", tipo: "success" })

    console.log(
      {
        nome, 
        dataInicio, 
        dataFinal, 
        infosPropriedade: {
          id: selectPropriedade.id,
          nome: selectPropriedade.nome, 
          cnpj: selectPropriedade.cnpj, 
        },
        laboratorio: {
          id: selectLaboratorio.id,
          nome: selectLaboratorio.nome
        }, 
        observacoes: observacao
      }
    )
    resetFields()
    setFormBlok(true)
  }
  //#endregion
  
  //#region : OBSERVA O ERROR
  useEffect(() => {
    for(let key in errors){
      if(key){
        setAlertMsg({ msg: "Preencha os campos obragatórios.", tipo: "error" })
      }
    }
  }, [errors])
  //#endregion

  //#region : RESETA OS CAMPOS
  const resetFields = () => {
    reset({
      nome:'',
      dataInicio:'',
      dataFinal:'',
      selectPropriedade: "",
      selectLaboratorio: "",
      observacao:''
    })
    setNomeletter(0)
    setObsletter(0)

    setTimeout(() => {
      setAlertMsg({ msg: '', tipo: '' })
    }, 3000)
  }
  //#endregion

  //#region : CONTAR CARACTERES
  const handleLetterNome = e => setNomeletter(e.target.value.length)
  const handleLetterObs = e => setObsletter(e.target.value.length)
  //#endregion

  return <S.Box>
  <form onSubmit={handleSubmit(onSubmit)}>
    <section className={"container"}>
      <a href="/" className={["boxBlock", formBlock ? "active" : ""].join(' ')}>
        <svg width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9 27C9 12.09 21.09 0 36 0C50.91 0 63 12.09 63 27C63 41.91 50.91 54 36 54C28.53 54 21.81 50.97 16.92 46.08L21.18 41.82C24.96 45.63 30.21 48 36 48C47.61 48 57 38.61 57 27C57 15.39 47.61 6 36 6C24.39 6 15 15.39 15 27H24L11.88 39.09L11.67 38.67L0 27H9ZM33 30V15H37.5V27.75L48 33.99L45.84 37.62L33 30Z" fill="#828D8C"/></svg>
        <div>Reiniciar<br/><small>Novo cadastro</small></div>
      </a>

      <S.Header>
        <h3>Teste front-end</h3> 
        
        <input type="submit" value="Enviar" />
      </S.Header>
    
      <div className={["linha1", "linha"].join(' ')}>
        <TextField 
          id="nome"
          label="Nome *" 
          inputProps={{ maxLength: 40, onChange: handleLetterNome }}
          {...register("nome", { required: true })} 
          error={errors.nome}  
          helperText={errors.nome ? errors.nome && "Error" : nomeletter +"/40" } 
          />

        <TextField 
          id="dataInicio"
          label="Data Início *"
          type="date"
          defaultValue={""}
          {...register("dataInicio", { required: true })} 
          error={errors.dataInicio}  
          helperText={errors.dataInicio && "Error"}
          InputLabelProps={{
            shrink: true,
          }}
          />

        <TextField
          id="dataFinal"
          label="Data Final *"
          type="date"
          defaultValue={""}
          {...register("dataFinal", { required: true })} 
          error={errors.dataFinal}  
          helperText={errors.dataFinal && "Error"}
          InputLabelProps={{
          shrink: true,
          }}
          />

      </div>

      <div className={["linha2", "linha"].join(' ')}>
        <TextField 
          id="propriedadeSelect"
          label="Propriedade *"
          select 
          defaultValue={valuesProp.currenty}
          inputProps={{ onChange: handleChangeProp }}
          SelectProps={{ 
            renderValue: (optionProp) => optionProp.nome, 
          }}
          {...register("selectPropriedade", { required: true })} 
          error={errors.selectPropriedade}
          helperText={errors.selectPropriedade ? errors.selectPropriedade && "Error" : cnpjProp ? "CNPJ: "+ cnpjProp : ""}
          >
            {propriedade.map(item => (
              <MenuItem key={item.id} value={item}>
                <div className={"ItemSelect"} onClick={() => setCnpjProp(item.cnpj)}>
                  <h3>{item.nome}</h3>
                  <small>{item.cnpj}</small>
                </div>
              </MenuItem>
            ))}
        </TextField>
              
        <TextField 
          id="laboratorioSelect"
          select 
          defaultValue={valuesLab.currenty}
          inputProps={{ onChange: handleChangeLab }}
          label="Laboratório *"
          SelectProps={{ 
            renderValue: (optionLap) => optionLap.nome 
          }}
          {...register("selectLaboratorio", { required: true })} 
          helperText={errors.selectLaboratorio && "Error"}
          error={errors.selectLaboratorio}         
          >
            {laboratorio.map(item => (
              <MenuItem key={item.id} value={item}>
                <h3>{item.nome}</h3>
                <small>{item.cnpj}</small>
              </MenuItem>
            ))}
        </TextField>
      </div>

      <div className={["linha3", "linha"].join(' ')}>
        <TextField 
          id="observacao"
          label="Observação" 
          multiline
          inputProps={{ maxLength: 1000, onChange: handleLetterObs }}
          minRows={7}
          maxRows={10}
          {...register("observacao")} 
          error={errors.observacao}  
          helperText={ errors.observacao ? errors.observacao && "Error" : obsletter + "/1000" } 
          />
      </div>

      <ActionAlerts tipo={alertMsg.tipo} msg={alertMsg.msg} />
    </section>  
  </form>
  </S.Box>
}