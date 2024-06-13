using System.Text.Json.Serialization;
namespace StatesCountriesApi.Models;

public class Country
{
    public long Id { get; set; }
    public required string Name { get; set; }
    public required string Code { get; set; }

    [JsonIgnore]
    public ICollection<State>? States { get; }
}