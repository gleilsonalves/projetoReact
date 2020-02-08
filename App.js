import React from 'react'
import { Button, SafeAreaView, Text, ImageBackground } 
from 'react-native'

const frases = [
'Levanta, sacode a poeira, dá a volta por cima.',
	
'Nem todos os dias são bons, mas há algo bom em cada dia.',
	
'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.',
	
'Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!',
	
'Preste atenção nas oportunidades que estão à sua frente!',
	
'A cada novo dia, a cada momento, temos a nossa disposição a maravilhosa possibilidade do encontro, que traz em si infinitas oportunidades. Precisamos apenas estar atentos.',
	
'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
	
'A sua irritação não solucionará problema algum. O seu mau humor não modifica a vida. Não estrague o seu dia.',
	
'Vamos inventar o amanhã no lugar de se preocupar com o que aconteceu ontem.',
	
'As pessoas mais felizes não têm as melhores coisas. Elas sabem fazer o melhor das oportunidades que aparecem em seus caminhos.',
	
'Ninguém, além de você, está no controle de sua felicidade. Portanto, ajuste as velas e corrija e rumo.',
	
'Imagine uma nova história para sua vida e acredite nela.',
	
'Você tem que acordar cada manhã com determinação se você pretende ir para a cama com satisfação.',
	
'Hoje acordei pra viver, levantar e seguir em frente. Porque a vida sempre pede um pouco mais da gente.',
	
'Cada segundo é tempo para mudar tudo para sempre.',
	
'Não importa a cor do céu, quem faz o dia lindo é você.',
	
'A beleza começa quando você decide ser você mesma.',
	
'Se quer viver uma vida feliz, amarre-se a um objetivo, não às pessoas ou aos objetos.',
	
'Se tiver que amar, ame hoje. Se tiver que sorrir, sorria hoje. Se tiver que chorar, chore hoje. Pois o importante é viver hoje. O ontem já foi e o amanhã talvez não venha.',
	
'Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.',
]

export default class App extends React.Component {
	
	constructor(props) {		
		super(props)		
		this.state = {			
			frase: '', }	
	}

	render() {
		
		const { frase } = this.state		
			return (
			
				<SafeAreaView ImageBackground source={require('./assets/image-background.jpg')}  style={Platform.OS === 'android' && { marginTop: 200 }}>				
					<Text style={{ alignSelf: 'center', fontSize: 30 }}>Frases do dia</Text>				
					<Button title="Sortear Frase" onPress={() => this.gerarFraseRandomica()} />				
					<Text style={{ margin: 10, marginTop: 20, marginBottom: 20, color: 'red' }}>{frase}</Text>
				</SafeAreaView>	

				)
	}
			gerarFraseRandomica() {		
			const index = Math.floor(Math.random() * frases.length)		
			const frase = frases[index]		
			this.setState({ frase: frase })
	}
}