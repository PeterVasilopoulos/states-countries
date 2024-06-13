using Microsoft.EntityFrameworkCore;
using StatesCountriesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace StatesCountriesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly ApiContext _context;

        public CountriesController(ApiContext context)
        {
            _context = context;
        }


        // GET All
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
        {
            return await _context.Countries.ToListAsync();
        }


        // GET One
        [HttpGet("{id}")]
        public async Task<ActionResult<Country>> GetCountry(long id)
        {
            var country = await _context.Countries.FindAsync(id);

            if(country == null)
            {
                return NotFound();
            }

            return country;
        }


        // PUT
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCountry(long id, Country country)
        {
            if(id != country.Id)
            {
                return BadRequest();
            }

            _context.Entry(country).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!CountryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // POST
        [HttpPost]
        public async Task<ActionResult<Country>> PostCountry(Country country)
        {
            _context.Countries.Add(country);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCountry), new { id = country.Id }, country);
        }


        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCountry(long id)
        {
            var country = await _context.Countries.FindAsync(id);
            
            if(country == null)
            {
                return NotFound();
            }

            _context.Countries.Remove(country);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        // Country Exists Function
        // for use in PUT
        private bool CountryExists(long id)
        {
            return _context.Countries.Any(e => e.Id == id);
        }
    }
}