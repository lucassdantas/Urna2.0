const VotesCount = {
    sumVote: (selected, stage) => {
        selected = selected.candidate
        selected.votes ++
        console.log(selected)
    },
    calculateResults: (Candidates) => {
        let htmlCandidates = {
                stateRepresentative: [],
                congressman: [],
                senator: [],
                governor: [],
                president: []
        }
        Candidates.stateRepresentative.forEach(candidate => {
            let content = undefined
            if(candidate.party){
                content = `
                    <div class='candidate'>
                        <span> ${candidate.name} | ${candidate.party} |</span>
                        <span> Votos:${candidate.votes} </span>
                    </div>
                `
            } else {
                content = `
                <div class='candidate'>
                    <span> ${candidate.name} |</span>
                    <span> Votos:${candidate.votes} </span>
                </div>
            `
            }

            htmlCandidates.stateRepresentative.push(content)
        
        })
        Candidates.congressman.forEach(candidate => {
            let content = undefined
            if(candidate.party){
                content = `
                    <div class='candidate'>
                        <span> ${candidate.name} | ${candidate.party} |</span>
                        <span> Votos:${candidate.votes} </span>
                    </div>
                `
            } else {
                content = `
                <div class='candidate'>
                    <span> ${candidate.name} |</span>
                    <span> Votos:${candidate.votes} </span>
                </div>
            `
            }
            htmlCandidates.congressman.push(content)
        
        })
        Candidates.senator.forEach(candidate => {
            let content = undefined
            if(candidate.party){
                content = `
                    <div class='candidate'>
                        <span> ${candidate.name} | ${candidate.party} |</span>
                        <span> Votos:${candidate.votes} </span>
                    </div>
                `
            } else {
                content = `
                <div class='candidate'>
                    <span> ${candidate.name} |</span>
                    <span> Votos:${candidate.votes} </span>
                </div>
            `
            }
            htmlCandidates.senator.push(content)
        
        })
        Candidates.governor.forEach(candidate => {
            let content = undefined
            if(candidate.party){
                content = `
                    <div class='candidate'>
                        <span> ${candidate.name} | ${candidate.party} |</span>
                        <span> Votos:${candidate.votes} </span>
                    </div>
                `
            } else {
                content = `
                <div class='candidate'>
                    <span> ${candidate.name} |</span>
                    <span> Votos:${candidate.votes} </span>
                </div>
            `
            }
            htmlCandidates.governor.push(content)
        
        })
        Candidates.president.forEach(candidate => {
            let content = undefined
            if(candidate.party){
                content = `
                    <div class='candidate'>
                        <span> ${candidate.name} | ${candidate.party} |</span>
                        <span> Votos:${candidate.votes} </span>
                    </div>
                `
            } else {
                content = `
                <div class='candidate'>
                    <span> ${candidate.name} |</span>
                    <span> Votos:${candidate.votes} </span>
                </div>
            `
            }
            htmlCandidates.president.push(content)
        })
        return htmlCandidates
    }

}

export {VotesCount}