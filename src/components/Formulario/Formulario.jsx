import { useState } from 'react'
import styles from './Formulario.module.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        assunto: "",
        descricao: "", 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://backend-da-agencia.onrender.com/enviar-email",  {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if(response.ok){
            alert("E-mail enviado com sucesso! Entraremos em contato assim que possível.");
            setFormData({nome: "", telefone: "", email: "", assunto: "", descricao: ""});
        }else{
            alert("Erro ao enviar o e-mail.");
        }
    };

    const formatarTelefone = (value) => {
        if (!value) return "";
        if (value.length <= 10) {
          return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
          return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
    };
      

  return (
    <div className={styles.formulario}>
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
                name='nome'
                type='text'
                maxLength='100'
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
            />
            <label>Telefone:</label>
            <input
                name="telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) => {
                    let num = e.target.value.replace(/\D/g, "");
                    if (num.length > 11) num = num.slice(0, 11); 
                    setFormData({ ...formData, telefone: formatarTelefone(num) }); 
                }}
                placeholder="(99) 99999-9999"
                maxLength="15"
                required
            />

            <label>E-mail:</label>
            <input
                name='email'
                type='email'
                maxLength='80'
                value={formData.email}
                onChange={handleChange}
                placeholder='seuemail@gmail.com'
                required
            />
            <label>Assunto:</label>
            <input
                name='assunto'
                type='text'
                maxLength='100'
                value={formData.assunto}
                onChange={handleChange}
                placeholder='Digite o assunto'
                required
            />
            <label>Descrição:</label>
            <textarea
                name="descricao"
                rows='5'
                cols='50'
                maxLength='500'
                value={formData.descricao}
                onChange={handleChange}
                placeholder='500 caracteres...'
                required
            />

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Formulario
