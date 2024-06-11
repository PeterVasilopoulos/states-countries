namespace StatesCountriesApi.Models;

public class Country
{
    public long Id { get; set; }
    public required string Code { get; set; }
    public required string Name { get; set; }

    public ICollection<State> States { get; }
}