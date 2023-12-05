using DeshawnsAPI.Models;
using DeshawnsAPI.Models.DTOs;

List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Em Hopper",
        CityId = 1,
        ImageURL = "https://images.pexels.com/photos/3487734/pexels-photo-3487734.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new Dog()
    {
        Id = 2,
        Name = "Dorte Fjalland",
        CityId = 2,
        ImageURL = "https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
};
List<City> cities = new List<City>()
{
    new City()
    {
        Id = 1,
        Name = "Nashville"
    }
};
List<Walker> walkers = new List<Walker>()
{
    new Walker()
    {
        // id, name, image url
        Id = 2,
        Name = "Bruno Salvadori",
        ImageURL = "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new Walker()
    {
        // id, name, image url
        Id = 2,
        Name = "Tu Nguyen",
        ImageURL = "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    new Walker()
    {
        // id, name, image url
        Id = 3,
        Name = "Amit Brokde",
        ImageURL = "https://images.pexels.com/photos/17136147/pexels-photo-17136147/free-photo-of-indian-traditional-beard-man.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
};

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
// greetings endpoint
app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});
// get dogs endpoint
app.MapGet("/api/dogs", () =>
{
    return dogs.Select((dog) => new DogDTO
    {
        // id, name, city, imageUrl
        Id = dog.Id,
        Name = dog.Name,
        CityId = dog.CityId,
        ImageURL = dog.ImageURL
    });
});
// get walkers endpoint
app.MapGet("/api/walkers", () =>
{
    return walkers.Select((walker) => new WalkerDTO
    {
        Id = walker.Id,
        Name = walker.Name,
        ImageURL = walker.ImageURL
    });
});
// run app
app.Run();
