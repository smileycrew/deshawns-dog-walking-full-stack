namespace DeshawnsAPI.Models;
public class Walker
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ImageURL { get; set; }
    public List<City> Cities { get; set; }
}