using Microsoft.EntityFrameworkCore;

namespace StatesCountriesApi.Models;

public class StateContext : DbContext
{
    public StateContext(DbContextOptions<StateContext> options) : base(options)
    {

    }

    public DbSet<State> States { get; set; } = null!;
    public DbSet<Country> Countries { get; set; } = null!;
}
