

employeeColumn = ['UserId', 'Name', 'PositionID', 'Department', 'Email','Phone','LocationID', 'ReportsTo']
positionColumn = ['PositionID', 'Name', 'Salary']
locationColumn = ['LocationID', 'Building', 'Floor', 'Cube', 'City']

locations = {}

for cube in range(1000,5000,100):
    for building in ['A','B','X','Y']:
        lid = building+str(cube)
        if building in ['A','B']:
            city = 'San Francisco, CA'
        else:
            city = 'New York, NY'
        locations[lid] = {
            'LocationID': lid,
            'Building': building,
            'Floor': cube//1000,
            'Cube': cube,
            'City': city
        }

positions = {
    '1': {'Poistion ID':'1','Name': 'Associate','Salary' : '50000 USD' },
    '2': {'Poistion ID':'2','Name': 'Senior Associate','Salary' : '75000 USD' },
    '3': {'Poistion ID':'3','Name': 'Manager','Salary' : '90000 USD' },
    '4': {'Poistion ID':'4','Name': 'Senior Manager','Salary' : '1050000 USD' },
    '5': {'Poistion ID':'5','Name': 'Director','Salary' : '130000 USD' },
    '6': {'Poistion ID':'6','Name': 'CEO','Salary' : '200000 USD' },
}

employees = {

 'Robert Baratheon': {      
 'UserId': 'baratheon.robert',
 'Name': 'Robert Baratheon',
 'PositionID': '6',
 'Department': 'Management',
 'Email': 'king@redkeep.com',
 'Phone': '666-666-666',
 'LocationID': 'A4000',
 'ReportsTo' : ''
 },
'Ned Stark': {         
 'UserId': 'stark.ned',
 'Name': 'Ned Stark',
 'PositionID': '5',
 'Department': 'Management',
 'Email': 'wardenofthenorth@winterfell.com',
 'Phone': '222-666-666',
 'LocationID': 'X4000',
 'ReportsTo' : 'Robert Baratheon'
 },
'Robert Baratheon': {         
 'UserId': 'lannister.tywin',
 'Name': 'Tywin Lannister',
 'PositionID': '5',
 'Department': 'Management',
 'Email': 'wardenofthewest@casterlyrock.com',
 'Phone': '333-666-999',
 'LocationID': 'A3000',
 'ReportsTo' : 'Robert Baratheon'
 },
'Catelyn Stark': {         
 'UserId': 'stark.catelyn',
 'Name': 'Catelyn Stark',
 'PositionID': '4',
 'Department': 'Management',
 'Email': 'ladyinthenorth@winterfell.com',
 'Phone': '222-666-665',
 'LocationID': 'X3000',
 'ReportsTo' : 'Ned Stark'
 },
'Cersei Lannister': {         
 'UserId': 'lannister.cersei',
 'Name': 'Cersei Lannister',
 'PositionID': '4',
 'Department': 'Management',
 'Email': 'cerseithequeen@redkeep.com',
 'Phone': '666-444-666',
 'LocationID': 'B3000',
 'ReportsTo' : 'Tywin Lannister'
 },
'Jon Snow': {         
 'UserId': 'snow.jon',
 'Name': 'Jon Snow',
 'PositionID': '3',
 'Department': 'Warfare',
 'Email': 'bornagain@wall.com',
 'Phone': '111-111-111',
 'LocationID': 'Y4000',
 'ReportsTo' : 'Catelyn Stark'
 },
'Daenerys Targaryen': {         
 'UserId': 'targaryen.daeny',
 'Name': 'Daenerys Targaryen',
 'PositionID': '3',
 'Department': 'Warfare',
 'Email': 'motherofdragons@essos.com',
 'Phone': '555-555-555',
 'LocationID': 'B2000',
 'ReportsTo' : 'Cersei Lannister'
 },
}


