using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("todo")]
    public class TodoController : ControllerBase
    {
        public TodoController(TodoRepository repository)
        {
            _repository = repository;
        }
        private readonly TodoRepository _repository;

        [HttpGet]
        public async Task<ActionResult> GetAsync(CancellationToken cancellationToken)
        {
            var models = await _repository.GetFileAsync(cancellationToken);
            return Ok(
                models.Select(s => new
                {
                    s.Id,
                    s.Descricao,
                    s.DataConclusao,
                    s.IsConcluido
                }).ToList());
        }

        [HttpGet, Route("{id}")]
        public async Task<ActionResult> GetAsync(int id, CancellationToken cancellationToken)
        {
            var model = await _repository.GetFileAsync(id.ToString(), cancellationToken);
            return Ok(
                new
                {
                    model.Id,
                    model.Descricao,
                    model.DataConclusao,
                    model.IsConcluido
                });
        }

        [HttpGet, Route("search/{search?}")]
        public async Task<ActionResult> SearchAsync(string search, CancellationToken cancellationToken)
        {
            var models = await _repository.SearchAsync(search, cancellationToken);

            return Ok(models.Select(s => new
            {
                s.Id,
                s.DataConclusao,
                s.Descricao,
                s.IsConcluido
            }).ToList());
        }

        [HttpPost]
        public async Task<ActionResult> CreateAsync(TodoViewModel viewModel, CancellationToken cancellationToken)
        {
            var model = new TodoModel(viewModel.Descricao);
            await _repository.InsertOneAsync(model, cancellationToken);
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> EditAsync(TodoViewModel viewModel, CancellationToken cancellationToken)
        {
            var model = await _repository.GetFileAsync(viewModel.Id, cancellationToken);

            model.Update(descricao: viewModel.Descricao);

            await _repository.UpdateAsync(model, cancellationToken);

            return Ok();
        }

        [HttpPut, Route("edit-concluido")]
        public async Task<ActionResult> EditAsync(UpdateLoteViewModel viewModel, CancellationToken cancellationToken)
        {
            var ids = viewModel.Itens.Select(s => s.Id).ToList();
            var models = await _repository.GetFileAsync(ids, cancellationToken);

            models.ForEach(item =>
            {
                var model = models.Single(w => w.Id == item.Id);
                model.SetIsConcluido(true);
            });

            await _repository.UpdateAsync(models, cancellationToken);
            return Ok();
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task DeleteAsync(int id, CancellationToken cancellationToken)
        {
            await _repository.DeleteAsync(id.ToString(), cancellationToken);
        }

    }
}
