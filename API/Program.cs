using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddDbContext<StoreContext>(opt =>
{
  opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// dealing with CORS for the frontend
builder.Services.AddCors();

var app = builder.Build();

// Configure the Cors middleware
app.UseCors(opt =>
{
  opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});

// Configure the HTTP request pipeline.
app.MapControllers();

DbInitializer.InitDb(app); // seed the database

app.Run();
