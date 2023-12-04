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

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});


app.Run();
