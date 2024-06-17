using Microsoft.EntityFrameworkCore;

namespace StatesCountriesApi.Models;

public class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<ApiContext> options) : base(options)
    {

    }

    public DbSet<Country> Countries { get; set; } = null!;
    public DbSet<State> States { get; set; } = null!;

    // Seeding Data
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Country>().HasData(
            new Country { Id = 1, Name = "United States", Code = "US" },
            new Country { Id = 2, Name = "Canada", Code = "CA" },
            new Country { Id = 3, Name = "Mexico", Code = "MX" }
        );

        modelBuilder.Entity<State>().HasData(
            new State { Id = 1, Name = "Virginia", Code = "VA", CountryId = 1 },
            new State { Id = 2, Name = "Florida", Code = "FL", CountryId = 1 },
            new State { Id = 3, Name = "Ontario", Code = "ON", CountryId = 2 },
            new State { Id = 4, Name = "Mexico City", Code = "MXC", CountryId = 3 }
        );
    }
}