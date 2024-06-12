using Microsoft.EntityFrameworkCore;
using StatesCountriesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace StatesCountriesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatesController : ControllerBase
    {
        private readonly StateContext _context;

        public StatesController(StateContext context)
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
        [HttpGet("/countries/{countryCode}/states")]
        public async Task<ActionResult<IEnumerable<State>>> GetStatesWithCountry(string countryCode)
        {
            // var statesWithCountry = _context.States.Where(s => s.CountryCode.ToLower() == countryCode);

            // return await statesWithCountry.ToListAsync();

            var countryStates = _context.States.Where(s => s.Country.Code.ToLower() == countryCode.ToLower());

            if(countryStates == null)
            {
                return NotFound();
            }

            return await countryStates.ToListAsync();
        }


        // POST
        [HttpPost]
        public async Task<ActionResult<State>> PostState(State state)
        {
            // find country from CountryCode
            // var country = _context.Countries.Where(c => c.Code.ToLower() == state.CountryCode);

            // add state to country's state list
            // country.ElementAt(0).States.Add(state);

            // call PutCountry to update country?

            // add country to state
            // state.Country = country.ElementAt(0);

            _context.States.Add(state);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetState), new { id = state.Id }, state);
        }
    }
}