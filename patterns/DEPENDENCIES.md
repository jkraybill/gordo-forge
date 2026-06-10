# Pattern Dependencies & Activation Map

Visual reference for pattern relationships. Answers: "What requires what? When does this activate? What resurfaces deferred patterns?"

---

## Dependency Graph

```
                              ┌─────────────────┐
                              │   FEDERATION    │
                              │     Ring 3      │
                              └────────┬────────┘
                                       │ requires
                                       ▼
┌─────────────────┐           ┌─────────────────┐
│  RECURSIVE-     │           │   MULTI-HUB     │
│  IMPROVEMENT    │           │     Ring 3      │
│    Ring 2       │           └─────────────────┘
└─────────────────┘                    
         │ enhances                    
         ▼                             
┌─────────────────┐           ┌─────────────────┐
│    FULL-CI      │◄──────────│   ANTI-WALL     │
│    Ring 2       │  feeds    │     Ring 2      │
└────────┬────────┘           └─────────────────┘
         │ graduates from              
         ▼                             
┌─────────────────┐                    
│   MINIMAL-CI    │                    
│    Ring 1       │                    
└─────────────────┘                    

┌─────────────────┐           ┌─────────────────┐
│ SESSION-        │           │   ANTI-MOLD     │
│ CONTINUITY      │           │     Ring 1      │
│    Ring 1       │           └─────────────────┘
└─────────────────┘                    
```

---

## Dependency Types

| Type | Meaning | Example |
|------|---------|---------|
| **requires** | Cannot activate without prerequisite | FEDERATION requires MULTI_HUB |
| **graduates from** | Builds on simpler version | FULL_CI graduates from MINIMAL_CI |
| **feeds** | Output improves other pattern | ANTI_WALL directness feeds FULL_CI honesty |
| **enhances** | Health checks can resurface others | RECURSIVE_IMPROVEMENT enhances any Ring 2 |

---

## Activation Lifecycle

```
Session 0 (Interview)
    │
    ├─► Ring 1 always activates
    │   • session-continuity
    │   • minimal-ci  
    │   • anti-mold
    │
    ├─► Ring 2 interview gates
    │   • Need surfaced? → Activate
    │   • Need unclear? → Defer to session N
    │   • No need? → Skip
    │
    └─► Ring 3 explicit request only
        • Multi-hub: "Working in multiple contexts?"
        • Federation: Requires multi-hub active

Session 10
    │
    └─► Deferral resurface: anti-wall
        (If deferred at interview)

Session 20
    │
    └─► Health check milestone
        • Recursive-improvement first scan
        • Full-CI health metrics

Session 30-50
    │
    └─► Graduation window
        • Minimal-CI → Full-CI if accumulated items

Session 50
    │
    └─► Deferral resurface: recursive-improvement
        (If deferred at interview)

Session 100+
    │
    └─► Full maturity
        • Evaluate recursive-improvement value
        • All patterns available
```

---

## Deferral Mechanism

When a pattern is deferred (not skipped), it records in `INTERVIEW_LOG.yaml`:

```yaml
deferred_patterns:
  - pattern: anti-wall
    activation_session: 10
    reason: "Trust not yet established"
  - pattern: recursive-improvement  
    activation_session: 50
    reason: "Insufficient operational history"
```

**Resurface trigger:** BOS Phase 4 (Deferral Check) reads this file and surfaces deferred patterns at their target session.

**Important:** This check runs in Ring 1 (session-continuity BOS), not Ring 2. Deferred patterns resurface even if no Ring 2 pattern is currently active.

---

## Common Questions

**Q: Can I have recursive-improvement without full-ci?**  
A: Yes. The CI-triage trigger is a bonus, not a requirement. Health check milestones still run.

**Q: Can I skip straight to Ring 3?**  
A: Multi-hub yes (if you have multiple hubs). Federation no (requires multi-hub).

**Q: What if I activate anti-wall but trust degrades later?**  
A: The trust calibration question resurfaces periodically. Downgrade to minimal expression if directness is no longer welcome.

**Q: What happens to deferred patterns if I never hit the session milestone?**  
A: They wait. If you close the hub before session 50, recursive-improvement never resurfaces. That's fine — you didn't need it.

---

*Created S432 2026-06-10 per roundtable F13 (understandability). Visual map for first-time readers.*
