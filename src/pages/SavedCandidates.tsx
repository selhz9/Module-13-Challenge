import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedCandidates);
  }, []); 

  const removeCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.login !== login);

    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));

    setSavedCandidates(updatedCandidates);
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No saved candidates yet!</p>
      ) : (
        <table className="saved-candidates-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt={candidate.login}
                    style={{ width: '100px', height: '100px' }}
                  />
                </td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'None'}</td>
                <td>{candidate.email || 'None'}</td>
                <td>{candidate.company || 'None'}</td>
                <td>{candidate.bio || 'None'}</td>
                <td>
                  <button
                    onClick={() => removeCandidate(candidate.login)}
                    className="action-button discard"
                    aria-label="Remove candidate"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;
