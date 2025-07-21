using System;
using Application.Activities.Commands;
using FluentValidation;

namespace Application.Validators;

public class CreateActivityValidator : AbstractValidator<CreateActivity.Command>
{
    public CreateActivityValidator()
    {
        RuleFor(x => x.ActivityDto.Title).NotEmpty().WithMessage("Title is required");
        RuleFor(x => x.ActivityDto.Description).NotEmpty().WithMessage("Description is required");
        RuleFor(x => x.ActivityDto.Category).NotEmpty().WithMessage("Category is required");
        RuleFor(x => x.ActivityDto.Date).NotEmpty().WithMessage("Date is required");
        RuleFor(x => x.ActivityDto.City).NotEmpty().WithMessage("City is required");
        RuleFor(x => x.ActivityDto.Venue).NotEmpty().WithMessage("Venue is required");
    }
}
