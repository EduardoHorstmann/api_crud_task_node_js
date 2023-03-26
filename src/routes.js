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
      const task = {
        id:randomUUID,
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
  }
]