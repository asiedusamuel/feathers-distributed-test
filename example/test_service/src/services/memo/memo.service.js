// Initializes the `todos` service on path `/todos`
import createService from 'feathers-nedb';
import createModel from '../../models/memo.model.js';
import hooks from './memo.hooks.js';

export default function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'memo',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/memo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('memo');
  service.hooks(hooks);

  const todosService = app.service('todos');

  todosService.find().then(items => console.log('.find()', items));
  todosService.get(1).then(item => console.log('.get(1)', item));
};
