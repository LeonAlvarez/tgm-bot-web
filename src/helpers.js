import command_names from "./json/comandos.json";

export function commands() {
  return Promise.all(command_names.map(async (name) => {
    try {
      const module = await import(`./json/comandos/${name}.json`);
      return {name, messages: module};
    } catch (error) {
      console.error(`import ${name}.json failed`);
    }
  },))
}
