using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductGrpcService.Domain.Models;

namespace ProductGrpcService.Database.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Name).IsRequired();
        builder.Property(p => p.Price).IsRequired();

        builder.HasData
        (
            new Product()
            {
                Id = 1,
                Name = "Apple",
                Price = 1.15
            },
            new Product()
            {
                Id = 2,
                Name = "Watermelon",
                Price = 3.12
            },
            new Product()
            {
                Id = 3,
                Name = "Orange",
                Price = 2.41
            });
    }
}