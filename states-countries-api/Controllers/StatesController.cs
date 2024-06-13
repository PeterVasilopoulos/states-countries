using Microsoft.EntityFrameworkCore;
using StatesCountriesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace StatesCountriesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatesController : ControllerBase
    {
        private readonly ApiContext _context;

        public StatesController(ApiContext context)
        {
            _context = context;
        }


        // GET All
        [HttpGet]
        public async Task<ActionResult<IEnumerable<State>>> GetStates()
        {
            return await _context.States.ToListAsync();
        }


        // GET One
        [HttpGet("{id}")]
        public async Task<ActionResult<State>> GetState(long id)
        {
            var state = await _context.States.FindAsync(id);

            if(state == null)
            {
                return NotFound();
            }

            return state;
        }


        // GET All with country code
        [HttpGet("country/{countryCode}")]
        public async Task<ActionResult<IEnumerable<State>>> GetStatesWithCountry(string countryCode)
        {
            var countryStates = _context.States
                .Where(s => s.Country!.Code.ToLower() == countryCode.ToLower());

            return await countryStates.ToListAsync();
        }


        // POST
        [HttpPost]
        public async Task<ActionResult<State>> PostState(State state)
        {
            _context.States.Add(state);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetState), new { id = state.Id }, state);
        }
    }
}