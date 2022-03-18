export function handleLink(id, name) {

    const regex = name.replace(/\s+/g, "-").toLowerCase();
    const link = id + "/" + regex;

    return link;
}