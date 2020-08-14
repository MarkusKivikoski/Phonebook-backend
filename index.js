const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(cors())

let persons = [
	{
		name: 'Arto Hellas',
		number: '111-111111111',
		id: 1,
	},
	{
		name: 'Dan Abramov',
		number: '12-43-234345',
		id: 2,
	},
	{
		name: 'Ada Lovelace',
		number: '39-44-5323523',
		id: 3,
	},
	{
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
		id: 4,
	},
	{
		name: 'Prank Sinatra',
		number: '133-6456326',
		id: 5,
	},
	{
		name: 'Spärde Spödö',
		number: '414-67262632',
		id: 6,
	},
]
const date = new Date()

const morganFormat = (tokens, req, res) => {
	let format = [
		tokens.method(req, res),
		tokens.url(req, res),
		tokens.status(req, res),
		tokens.res(req, res, 'content-length'),
		'-',
		tokens['response-time'](req, res),
		'ms',
	]

	if (req.method === 'POST') {
		format = format.concat(JSON.stringify(req.body))
	}

	return format.join(' ')
}

app.use(morgan(morganFormat))

const generateId = () => {
	const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
	return maxId + 1
}

app.get('/persons', (req, res) => {
	res.json(persons)
})

app.get('/info', (req, res) => {
	res.send(
		`<h3>Phonebook has info for ${persons.length} people</h3>
      <h3>${date}</h3>`
	)
})

app.get('/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(person => person.id === id)
	if (person) {
		res.json(person)
	} else {
		res.status(404).end()
	}
})

app.post('/persons', (req, res) => {
	const body = req.body
	const nameExists = persons.find(person => person.name === body.name)
	const numberExists = persons.find(person => person.number === body.number)

	if (!body.name) {
		console.log('name missing')
		return res.status(400).json({
			err: 'name missing',
		})
	} else if (!body.number) {
		console.log('number missing')
		return res.status(400).json({
			err: 'number missing',
		})
	} else if (nameExists) {
		console.log('name must be unique')
		return res.status(400).json({
			err: 'name must be unique',
		})
	} else if (numberExists) {
		console.log('number must be unique')
		return res.status(400).json({
			err: 'number must be unique',
		})
	}

	const person = {
		name: body.name,
		number: body.number,
		id: generateId(),
	}

	persons = persons.concat(person)
	res.json(person)
})

app.delete('/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	persons = persons.filter(person => person.id !== id)

	res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
