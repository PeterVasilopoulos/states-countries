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

    }
}