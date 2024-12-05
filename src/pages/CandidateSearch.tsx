import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); 
  const [currentIndex, setCurrentIndex] = useState<number>(0); 
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]); 


  useEffect(() => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
    
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };
    fetchCandidates();
  }, []);

  const handleSave = () => {
    if (candidates[currentIndex]) {
      const updatedSavedCandidates = [...savedCandidates, candidates[currentIndex]];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates)); 
      nextCandidate();
    }
  };

  const handleDiscard = () => {
    nextCandidate();
  };

  const nextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('No more candidates!');
    }
  };

  const currentCandidate = candidates[currentIndex];

  return (
    <div className="candidate-search-container">
    <header>
      <h1>Candidate Search</h1>
    </header>

    {currentCandidate ? (
      <div className="candidate-card">
        <img
          src={currentCandidate.avatar_url}
          alt={currentCandidate.login}
          className="candidate-avatar"
        />
        <div className="candidate-info">
          <h3>{currentCandidate.login}</h3>
          <p>Location: {currentCandidate.location || 'None'}</p>
          <p>Email: {currentCandidate.email || 'None'}</p>
          <p>Company: {currentCandidate.company || 'None'}</p>
          <p>Bio: {currentCandidate.bio || 'None'}</p>

          <a href={`https://github.com/${currentCandidate.login}`} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
        <div className="candidate-actions">
          <button onClick={handleDiscard} className="action-button discard">
            -
          </button>
          <button onClick={handleSave} className="action-button save">
            +
          </button>
        </div>
      </div>
    ) : (
      <p>No candidates available!</p>
    )}
  </div>
  );
};

export default CandidateSearch;