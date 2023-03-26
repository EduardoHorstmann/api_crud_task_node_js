import {randomUUID} from 'node:crypto'
import { Database } from './middlewares/database.js';
import { buildRoutePath } from './utils/build-routes.js';

const database = new Database
export const routes = [
  {
    method  : 'POST',
    path    : buildRoutePath('/task'),
    handler : (req, res) => {
      const {title, description} = req.body;
      if(!title || !description) {
        return res.writeHead(400).end(
          JSON.stringify({ message: 'Título e Descrição são obrigatórios'}))
      }
      const task = {
        id:randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
      };
      database.insert('tasks', task)
      return res.writeHead(201).end();
    }
  },
  {
    method : 'GET',
    path   : buildRoutePath('/task'),
    handler : (req, res) => {
      const { search } = req.query
      const tasks = database.select('tasks', search ? {
        title: search,
        description: search
      } : null)
      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method  :'DELETE',
    path    : buildRoutePath('/task/:id'),
    handler : (req, res) => {
      const { id } = req.params
      const [task] = database.select('tasks', { id })
      if (!task) {
        return res.writeHead(404).end()
      }
      database.delete('tasks',id)
      return res.writeHead(204).end();
    }
  },
  {
    method  : 'PUT',
    path    : buildRoutePath('/task/:id'),
    handler : (req, res) => {
      const { id } = req.params
      const {title, description } = req.body
      if(!title || !description) {
        return res.writeHead(400).end(
          JSON.stringify({ message: 'Título ou Descrição são obrigatórios' }))
      }
      const [task] = database.select('tasks', { id })
      if (!task) {
        return res.writeHead(404).end()
      }
      database.update('tasks', id, {
        title,
        description,
        updated_at : new Date()
      })
      return res.writeHead(204).end();
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/task/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const [task] = database.select('tasks', { id })
      if (!task) {
        return res.writeHead(404).end()
      }
      const isTaskCompleted = !!task.completed_at
      const completed_at = isTaskCompleted ? null : new Date()
      database.update('tasks', id, { completed_at })
      return res.writeHead(204).end()
    }
  }
]