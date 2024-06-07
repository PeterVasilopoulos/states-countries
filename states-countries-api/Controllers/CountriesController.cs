using Microsoft.EntityFrameworkCore;
using StatesCountriesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace StatesCountriesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly CountryContext _context;

        public CountriesController(CountryContext context)
        {
            _context = context;
        }

        // GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
        {
            return await _context.Countries.ToListAsync();
        }
    }
}