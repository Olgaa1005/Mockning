const User = require('./Models/user') //Hämtar User klassen
const { createUser, getAllUsers } = require('./dbService');

jest.mock('./Models/user') //Gör alla instanser av User till en Mockad version

describe ("Tester mot Databas", () => {

  afterEach( () => {
    jest.clearAllMocks()
  })

  test('createUser ska skapa en ny användare', async () => {
    // Mockad respons för User.create
    const mockUser = { id: 1, name: 'Marcus', email: 'marcus@example.com' };
    User.create.mockResolvedValue(mockUser);

    // Kör funktionen och verifiera
    const result = await createUser('Marcus', 'marcus@example.com');
    expect(User.create).toHaveBeenCalledTimes(1);
    expect(User.create).toHaveBeenCalledWith({ name: 'Marcus', email: 'marcus@example.com' });
    expect(result).toEqual(mockUser);
  });

  test('getAllUsers ska returnera alla användare', async () => {
    // Mockad respons för User.findAll
    const mockUsers = [
      { id: 1, name: 'Marcus', email: 'marcus@example.com' },
      { id: 2, name: 'Anna', email: 'anna@example.com' },
    ];
    User.findAll.mockResolvedValue(mockUsers);

    // Kör funktionen och verifiera
    const result = await getAllUsers();
    expect(User.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUsers);
  });

  test('getAllUsers ska hantera ett tomt resultat', async () => {
    // Mocka att databasen är tom
    User.findAll.mockResolvedValue([]);

    // Kör funktionen och verifiera
    const result = await getAllUsers();
    expect(User.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  test('createUser ska hantera fel vid databasoperation', async () => {
    // Mocka ett fel från User.create
    User.create.mockRejectedValue(new Error('Databasfel'));

    // Kör funktionen och verifiera att den kastar ett fel
    await expect(createUser('Marcus', 'marcus@example.com')).rejects.toThrowError('Databasfel');
    expect(User.create).toHaveBeenCalledTimes(1);
  });




})