 // Exercice 01
        const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`
        const frequencies = {}
        const words = phrase
            .toLowerCase()
            .replaceAll(',','')
            .split(' ')


        for(let word of words) {
            if( word !== ''){
                if(frequencies[word]) {
                frequencies[word]++
                } else {
                    frequencies[word] = 1
                }
            }
        }
        const frequenciesArray = []
        for (let k in frequencies) {
            frequenciesArray.push({
                word: k,
                count: frequencies[k]
            })
        }
        frequenciesArray.sort((a, b) => b.count - a.count)

        console.log(`Les mots les plus fréquents sont "${frequenciesArray[0].word}" ${frequenciesArray[0].count}, "${frequenciesArray[1].word}" ${frequenciesArray[1].count}, "${frequenciesArray[2].word}" ${frequenciesArray[2].count}`)



        // Exercice 02 : palindrome
        
        function isPalindrome (word) {
            const letters = word
                .split('')
                .reverse()
                .join('')
             return word.toUpperCase() === letters.toUpperCase()
        } 
        
        console.log(isPalindrome(kayak))

        // exercice 03 :

        const students = [
            {
                name: 'John',
                notes: [1, 20, 18, 19, 12]
            },
            {
                name: 'Jane',
                notes: [17, 18, 20, 13, 15]
            },
            {
                name: 'Sophie',
                notes: [17, 12, 14, 15, 13]
            },
            {
                name: 'Marc',
                notes: [2, 3, 5, 8, 9]
            },
            {
                name: 'Manon',
                notes: [18, 17, 18, 19, 12]
            }
        ]

        const moyenne = (notes) => {
            let sum = 0
            for ( let note of notes ){
                sum = sum + note
            }
            return sum / notes.length
        }

        const compareStudent = (a, b) =>{
            return b.moyenne - a.moyenne 
        }

        for (let student of students) {
            student.moyenne = moyenne(student.notes)
            student.worst = Math.min(...student.notes)
            student.best = Math.max(...student.notes)
        }

        students.sort(compareStudent)

        const formatStudent = (student) => {
            return `${student.name} avec une moyenne ${student.moyenne}, meilleure note ${student.best}, pire note ${student.worst}` 
        }

        console.log(`Top 3 étudiant
            1: ${formatStudent(students[0])}
            2: ${formatStudent(students[1])}
            3: ${formatStudent(students[2])}
        `)
