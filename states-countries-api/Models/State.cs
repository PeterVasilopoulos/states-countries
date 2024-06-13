using System.Text.Json.Serialization;
namespace StatesCountriesApi.Models;

public class State
{
    public long Id { get; set; }
    public required string Name { get; set; }
    public required string Code { get; set; }

    public required long CountryId { get; set; }

    [JsonIgnore]
    public Country? Country { get; set; }
}