class TicketsMiddleware{

    analystFieldValidator(req, res, next){
        const { body } = req
        if(body.analyst === undefined){
            return res.status(400).json({ message: 'O campo "analista" é obrigatório.' })
        }
        if(body.analyst === ''){
            return res.status(400).json({ message: 'O campo "analista" não pode estar vazio.' })
        }
        next()
    }

    clientFieldValidator(req, res, next){
        const { body } = req
        if(body.client === undefined){
            return res.status(400).json({ message: 'O campo "cliente" é obrigatório.' })
        }
        if(body.client === ''){
            return res.status(400).json({ message: 'O campo "cliente" não pode estar vazio.' })
        }
        next()
    }

    clientFieldValidator(req, res, next){
        const { body } = req
        if(body.client === undefined){
            return res.status(400).json({ message: 'O campo "cliente" é obrigatório.' })
        }
        if(body.client === ''){
            return res.status(400).json({ message: 'O campo "cliente" não pode estar vazio.' })
        }
        next()
    }

    descriptionFieldValidator(req, res, next){
        const { body } = req
        if(body.description === undefined){
            return res.status(400).json({ message: 'O campo "description" é obrigatório.' })
        }
        if(body.description === ''){
            return res.status(400).json({ message: 'O campo "description" não pode estar vazio.' })
        }
        next()
    }

    resolutionDeadlineFieldValidator(req, res, next){
        const { body } = req
        if(body.resolutionDeadline !== undefined){

            const resolutionDeadlineDate = new Date(resolutionDeadline)

            if(isNaN(resolutionDeadlineDate)){
                return res.status(400).json({message: 'O campo "Prazo para resolução" deve ser uma data válida.'})
            }

            const today = new Date()
            if(resolutionDeadlineDate <= today){
                return res.status(400).json({message: 'O campo "Prazo para resolução" precisa ser uma data futura.'})
            }
        }

        next()
    }

    imagesFielValidator(req, res, next){
        const { body } = req
        const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

        if(body.images !== undefined && body.images !== null){

            if(typeof body.images !== 'string'){
                if(imageUrlRegex.test(body.images)){
                    return res.status(400).json({message: 'A URL da imagem não é válidas.'}) 
                }
            }
            if (Array.isArray(body.images)){
                for (const imageUrl of body.images) {
                    if (!imageUrlRegex.test(imageUrl)) {
                        return res.status(400).json({ message: 'Uma ou mais URLs de imagem são inválidas.' });
                    }
                }
            }
        }
        
    }
}

export default TicketsMiddleware