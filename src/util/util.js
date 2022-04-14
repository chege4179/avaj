

function generateRandomColor(){
	const colors = ["blue","green","red","yellow","purple","amber"]
	return colors[Math.floor(Math.random()* colors.length)]

}

function generateRandomColorGradient(){
	const gradients = ['100','200','300','400','500','600','700','800','900']
	return gradients[Math.floor(Math.random()* gradients.length)]
}

function getRandomColor(){
	return `${generateRandomColor()}.${generateRandomColorGradient()}`
}

export { getRandomColor }
