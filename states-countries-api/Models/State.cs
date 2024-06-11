namespace StatesCountriesApi.Models;

public class State
{
    public long Id { get; set; }
    public required string Name { get; set; }
    public required string Code { get; set; }

    public required string CountryCode { get; set; }
    // public Country Country { get; set; }
}