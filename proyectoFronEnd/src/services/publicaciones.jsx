async function getpublications() {
    try {
        const response = await fetch('http://localhost:3000/publications', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching publications');
        }

        const publications = await response.json();
        return publications;
    } catch (error) {
        console.error('Error fetching publications:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////

async function postpublications(nombre,tours,descripcion,img) {
    try {
     
        const userData = { 
           
           nombre,
           tours,
           descripcion,
           img
        };



        const response = await fetch("http://localhost:3000/publications", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updatepublications(nombre,tours,descripcion,img,id) 
{
    try {
     
        const userData = { 
            nombre, 
            tours,
            descripcion,
            img  
        };


        


        const response = await fetch("http://localhost:3000/publications/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}




//////////////LLAMADO DELETE/////////////


async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/publications/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default { deleteUser,getpublications,postpublications,updatepublications };