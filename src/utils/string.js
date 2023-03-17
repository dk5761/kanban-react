const nameConverter = (str) => {
    var names = str.split(/\s+/);

    // Replaces the first name with an initial, followed by a period.
    names[1] = names[1].substr(0, 1) + ".";

    // Glue the pieces back together.
    var name_abbr = names.join(' ');

    return name_abbr;
}

export { nameConverter }