using DeshawnsAPI.Models;
using DeshawnsAPI.Models.DTOs;
// starting list
List<Dog> dogs = new List<Dog>()
{
    // id, name, cityId, imageURL, walkerId
    new Dog()
    {
        Id = 1,
        Name = "Em Hopper",
        CityId = 1,
        ImageURL = "https://images.pexels.com/photos/3487734/pexels-photo-3487734.jpeg?auto=compress&cs=tinysrgb&w=800",
        WalkerId = 1
    },
    new Dog()
    {
        Id = 2,
        Name = "Dorte Fjalland",
        CityId = 2,
        ImageURL = "https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&w=800",
        WalkerId = 2
    }
};
List<City> cities = new List<City>()
{
    new City()
    {
        Id = 1,
        Name = "nashville"
    },
    new City()
    {
        Id = 2,
        Name = "white house"
    }
};
List<Walker> walkers = new List<Walker>()
{
    new Walker()
    {
        // id, name, image url
        Id = 1,
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
List<WalkerCity> walkerCities = new List<WalkerCity>()
{
    // id, walkerId, cityId
    new WalkerCity()
    {
        Id = 1,
        WalkerId = 1,
        CityId = 1
    },
    new WalkerCity()
    {
        Id = 2,
        WalkerId = 1,
        CityId = 2
    },
    new WalkerCity()
    {
        Id = 3,
        WalkerId = 2,
        CityId = 2
    }, new WalkerCity()
    {
        Id = 4,
        WalkerId = 3,
        CityId = 1
    }
};
// not sure what this is
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// no idea what this is
var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// no idea what this is
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
        ImageURL = dog.ImageURL,
        WalkerId = dog.WalkerId
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
// get cities endpoint
app.MapGet("/api/cities", () =>
{
    return cities.Select((city) => new CityDTO
    {
        Id = city.Id,
        Name = city.Name
    });
});
// get walker's cities (city id) endpoint
app.MapGet("/api/walker-cities/{cityId}", (int cityId) =>
{
    // filter the list first but i havent done it yet
    List<WalkerCity> walkerCitiesToSend = walkerCities.Where((walkerCity) => walkerCity.CityId == cityId).ToList();
    return walkerCitiesToSend.Select((walkerCity) => new WalkerCityDTO
    {
        Id = walkerCity.Id,
        WalkerId = walkerCity.WalkerId,
        CityId = walkerCity.CityId,
    });
});
// get dog with walker
app.MapGet("/api/dog/{dogId}", (int dogId) =>
{
    Dog dog = dogs.Find((dog) => dog.Id == dogId);
    Walker walker = walkers.Find((walker) => walker.Id == dog.WalkerId);
    return new DogDTO
    {
        // id, name, cityId, imageURL, walkerId, walker
        Id = dog.Id,
        Name = dog.Name,
        CityId = dog.CityId,
        ImageURL = dog.ImageURL,
        WalkerId = dog.WalkerId,
        Walker = walker == null ? null : new WalkerDTO
        {
            Id = walker.Id,
            Name = walker.Name,
            ImageURL = walker.ImageURL
        }
    };
});
// add city endpoint
app.MapPost("/api/cities/post", (City cityToAdd) =>
{
    cityToAdd.Id = cities.Max((city) => city.Id) + 1;
    cities.Add(cityToAdd);
});
// add dog endpoint
app.MapPost("/api/dog/post", (Dog dogToAdd) =>
{
    if (dogToAdd.Name == "")
    {
        return Results.BadRequest();
    }
    else if (cities.Find((city) => city.Id == dogToAdd.CityId) == null)
    {
        return Results.BadRequest();
    }
    else if (dogToAdd.ImageURL == "")
    {
        return Results.BadRequest();
    }
    dogToAdd.Id = dogs.Max((dog) => dog.Id) + 1;
    dogs.Add(dogToAdd);
    return Results.Created($"/dogs/{dogToAdd.Id}", new DogDTO
    {
        Id = dogToAdd.Id,
        Name = dogToAdd.Name,
        CityId = dogToAdd.CityId,
        ImageURL = dogToAdd.ImageURL
    });
});
// delete dog endpoint
app.MapDelete("/api/dog/delete/{dogId}", (int dogId) =>
{
    Dog dogToDelete = dogs.Find((dog) => dog.Id == dogId);
    if (dogToDelete == null)
    {
        return Results.BadRequest();
    }
    dogs.Remove(dogs.Find((dog) => dog.Id == dogToDelete.Id));
    return Results.NoContent();
});
// delete walker endpoint
app.MapDelete("/api/walker/delete/{walkerId}", (int walkerId) =>
{
    Walker walkerToDelete = walkers.Find((walker) => walker.Id == walkerId);
    if (walkerToDelete == null)
    {
        return Results.BadRequest();
    }
    walkers.Remove(walkers.Find((walker) => walker.Id == walkerToDelete.Id));
    dogs = dogs.Select((dog) =>
    {
        if (dog.WalkerId == walkerToDelete.Id)
        {
            dog.WalkerId = null;
            return dog;
        }
        return dog;
    }).ToList();
    return Results.NoContent();
});
// assign dog to a walker endpoint
app.MapPost("/api/dog/{dogId}/assign/{walkerId}", (int dogId, int walkerId) =>
{
    Dog dogToUpdate = dogs.Find((dog) => dog.Id == dogId);
    if (dogToUpdate == null)
    {
        return Results.BadRequest();
    }
    dogToUpdate.WalkerId = walkerId;
    return Results.Ok(new DogDTO
    {
        // id, name, cityId, imageURL, walkerId
        Id = dogToUpdate.Id,
        Name = dogToUpdate.Name,
        CityId = dogToUpdate.CityId,
        ImageURL = dogToUpdate.ImageURL,
        WalkerId = dogToUpdate.WalkerId
    });
});
// get walker and cities (walkerId)
app.MapGet("/api/walker-and-cities/{walkerId}", (int walkerId) =>
{
    Walker walkerToSend = walkers.Find((walker) => walker.Id == walkerId);
    if (walkerToSend == null)
    {
        return Results.NotFound();
    }
    List<WalkerCity> filteredWalkerCities = walkerCities.Where((walkerCity) => walkerCity.WalkerId == walkerToSend.Id).ToList();
    return Results.Ok(new WalkerDTO
    {
        // id, name, image url
        Id = walkerToSend.Id,
        Name = walkerToSend.Name,
        ImageURL = walkerToSend.ImageURL,
        WalkerCities = filteredWalkerCities.Select((walkerCity) => new WalkerCityDTO
        {
            // id, walkerId, cityId
            Id = walkerCity.Id,
            WalkerId = walkerCity.WalkerId,
            CityId = walkerCity.CityId
        }).ToList()
    });
});
// run app
app.Run();
